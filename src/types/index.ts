export interface Project {
  id: string
  name: string
  description: string
  idea: string
  createdAt: Date
  updatedAt: Date
  createdBy: string
  status: 'created' | 'planning' | 'in-progress' | 'review' | 'deployed'
  techStack: TechStack
  deploymentUrl?: string
}

export interface TechStack {
  frontend: string
  backend: string
  database: string
  deployment: string
}

export interface PRD {
  id: string
  projectId: string
  executiveSummary: string
  problemStatement: string
  targetAudience: string
  competitorAnalysis: string
  userPersonas: UserPersona[]
  userJourney: string
  features: Feature[]
  mvpScope: string
  futureScope: string
  successMetrics: string
  risks: string
}

export interface UserPersona {
  id: string
  name: string
  description: string
  goals: string[]
  painPoints: string[]
}

export interface Feature {
  id: string
  name: string
  description: string
  priority: 'high' | 'medium' | 'low'
  mvp: boolean
}

export interface Architecture {
  id: string
  projectId: string
  techStack: TechStack
  folderStructure: string
  databaseDesign: DatabaseSchema
  apiDesign: APIDesign
  deploymentArchitecture: string
  microservicesDiagram?: string
  systemFlowDiagram?: string
}

export interface DatabaseSchema {
  tables: Table[]
  relationships: Relation[]
}

export interface Table {
  id: string
  name: string
  columns: Column[]
}

export interface Column {
  id: string
  name: string
  type: string
  required: boolean
  primary: boolean
  unique: boolean
}

export interface Relation {
  id: string
  fromTable: string
  toTable: string
  type: 'one-to-one' | 'one-to-many' | 'many-to-many'
}

export interface APIDesign {
  endpoints: Endpoint[]
}

export interface Endpoint {
  id: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  path: string
  description: string
  auth: boolean
  rateLimit?: number
}

export interface SecurityDocument {
  id: string
  projectId: string
  authenticationFlow: string
  rbac: RBACConfig
  jwtStrategy: JWTConfig
  apiSecurity: string
  rateLimiting: string
  ddosProtection: string
}

export interface RBACConfig {
  roles: Role[]
  permissions: Permission[]
}

export interface Role {
  id: string
  name: string
  description: string
  permissions: string[]
}

export interface Permission {
  id: string
  resource: string
  action: string
  description: string
}

export interface JWTConfig {
  secret: string
  expiry: string
  refreshExpiry: string
  algorithm: string
}

export interface DesignSystem {
  id: string
  projectId: string
  colors: ColorPalette
  typography: Typography
  components: ComponentSpec[]
  spacing: SpacingScale
  darkMode: boolean
}

export interface ColorPalette {
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
}

export interface Typography {
  font: string
  headingSizes: Record<string, string>
  bodySizes: Record<string, string>
}

export interface ComponentSpec {
  id: string
  name: string
  description: string
  props: PropSpec[]
}

export interface PropSpec {
  name: string
  type: string
  required: boolean
}

export interface SpacingScale {
  scale: Record<string, string>
}

export interface FeatureTicket {
  id: string
  projectId: string
  title: string
  description: string
  acceptanceCriteria: string[]
  dependencies: string[]
  priority: 'high' | 'medium' | 'low'
  status: 'todo' | 'in-progress' | 'review' | 'done'
  aiPrompt?: string
}

export interface GeneratedCode {
  id: string
  projectId: string
  type: 'full-project' | 'feature' | 'screen' | 'api' | 'database' | 'component'
  language: string
  content: string
  filePath: string
}

export type AIAgentType = 
  | 'product-manager'
  | 'architect'
  | 'ui'
  | 'backend'
  | 'security'
  | 'qa'
  | 'devops'

export interface AIAgent {
  id: string
  type: AIAgentType
  name: string
  description: string
  capabilities: string[]
}

export interface Analytics {
  progress: number
  aiCost: number
  buildStatus: 'pending' | 'building' | 'success' | 'failed'
  deploymentStatus: 'pending' | 'deploying' | 'success' | 'failed'
  bugsCount: number
}