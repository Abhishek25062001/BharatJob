import { create } from 'zustand';
import { Job } from '../types';

interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
  selectedJob: Job | null;
  isLoading: boolean;
  searchQuery: string;
  filters: {
    category?: string;
    salaryMin?: number;
    salaryMax?: number;
    location?: string;
    radius?: number;
    experience?: string;
    jobType?: string[];
    shift?: string;
  };

  // Actions
  setJobs: (jobs: Job[]) => void;
  setSelectedJob: (job: Job | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: JobsState['filters']) => void;
  applyFilters: () => void;
}

export const useJobsStore = create<JobsState>((set, get) => ({
  jobs: [],
  filteredJobs: [],
  selectedJob: null,
  isLoading: false,
  searchQuery: '',
  filters: {},

  setJobs: (jobs) => set({ jobs }),
  setSelectedJob: (job) => set({ selectedJob: job }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
  applyFilters: () => {
    const { jobs, searchQuery, filters } = get();
    let filtered = jobs;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter((job) => job.title.includes(filters.category!));
    }

    // Filter by salary range
    if (filters.salaryMin) {
      filtered = filtered.filter((job) => job.salary.min >= filters.salaryMin!);
    }
    if (filters.salaryMax) {
      filtered = filtered.filter((job) => job.salary.max <= filters.salaryMax!);
    }

    set({ filteredJobs: filtered });
  },
}));
