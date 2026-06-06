"use client"

import { create } from "zustand"
import { Project, PRD, Architecture, SecurityDocument, DesignSystem, FeatureTicket } from "@/types"

interface ProjectState {
  currentProject: Project | null
  prd: PRD | null
  architecture: Architecture | null
  security: SecurityDocument | null
  design: DesignSystem | null
  tickets: FeatureTicket[]
  setCurrentProject: (project: Project) => void
  setPRD: (prd: PRD) => void
  setArchitecture: (architecture: Architecture) => void
  setSecurity: (security: SecurityDocument) => void
  setDesign: (design: DesignSystem) => void
  addTicket: (ticket: FeatureTicket) => void
}

export const useProjectStore = create<ProjectState>((set) => ({
  currentProject: null,
  prd: null,
  architecture: null,
  security: null,
  design: null,
  tickets: [],
  setCurrentProject: (project) => set({ currentProject: project }),
  setPRD: (prd) => set({ prd }),
  setArchitecture: (architecture) => set({ architecture }),
  setSecurity: (security) => set({ security }),
  setDesign: (design) => set({ design }),
  addTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),
}))