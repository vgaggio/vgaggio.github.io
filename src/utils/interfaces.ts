import { ChangeEvent, ReactNode, Dispatch, SetStateAction } from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface ContentObject {
  M: {
    sources: { L: any[] };
    content: { S: string };
  };
}

export interface DarkModeProviderProps {
  children: ReactNode;
}

export interface ConversationMessage {
  message_id: { S: string };
  timestamp: { S: string };
  user_id: { S: string };
  content: { S?: string; NULL?: true } | ContentObject;
  role: { S: string };
  tags: [string];
  handover: boolean;
}
export interface Conversation {
  conversation_id: string;
  message_id: string;
  timestamp: string;
  user_id: string;
  content: {
    content: string; // Ahora content es un objeto con una propiedad content de tipo string
  };
  role: string;
  tags: [string];
  handover: boolean;
  last_message?: string;
  unread_messages?: number;
}

export interface ConversationsData {
  [conversationId: string]: ConversationMessage[];
}
export interface LastEvaluatedKey {
  conversation_id: { S: string };
  timestamp: { S: string };
}

export interface CollectionsData {
  documents: string[];
  embeddings: string[] | null;
  ids: string[];
  metadatas: {
    depth?: number | "";
    keywords: string;
    referrerUrl?: string;
    url?: string;
  }[];
}

export interface CsvRow {
  [key: string]: string;
}

export interface Campaign {
  id: string;
  projectId: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  isDeleted: boolean;
  configuration?: CampaignConfiguration[];
  installmentsConfiguration?: CampaignInstallmentsConfiguration[];
  [key: string]: any; // This allows additional properties
}

export interface CampaignConfiguration {
  start: string;
  end: string;
  title?: string;
  whatsapp: number[];
  email: number[];
}

export interface CampaignInstallmentsConfiguration {
  type: string;
  start?: string;
  end?: string;
}

export interface Rating {
  project_id: string;
  rating: boolean;
  message: string;
  query: string;
  comment: string;
  description: string;
  date: string; // Nuevo campo para almacenar la fecha
}

export interface CallReportRating {
  project_id: string;
  rating: boolean;
  description: string;
  date: string; // Nuevo campo para almacenar la fecha
}


export interface Project {
  project_id: string;
  name: string;
  created_at: string;
  roles: string[]; // Asumí que 'roles' es un array de strings, ajusta según tu caso
  // Otros campos según la estructura real de tus proyectos
}

export interface Debt {
  phone: string;
  user_id: string;
  email: string;
  first_name: string;
  status: string;
  last_name: string;
  id: string;
  project_id: string;
  amount: string;
  link_id: string;
  domain_id: string;
  dni: string;
  campaign_id: string;
  last_contacted: string;
  upload_date: string;

  [key: string]: string; // Para manejar cualquier otro campo adicional de las deudas
}

export interface Template {
  name: string;
  language_code: string;
  attributes: {
    header: { content: string; variables: string[] | null } | null;
    body: { content: string; variables: string[] | null };
    footer: { content: string; variables: string[] | null } | null;
    buttons: { content: string; variables: string[] | null }[] | null;
  };
}


export interface EmailTemplate {
  is_active: string;
  name: string;
  html: string;
  project_id: string;
  template_id: string;
  timpestamp: number;
  subject: string;
}


export interface AddCampaignResponse {
  success: boolean;
  campaignId: string;
  message: string;
}
export interface ToggleProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export interface CodeCardProps {
  code: string;
  language: string;
}

export type ConversationFilter = "" | "cobranzas";

export interface FilterButtonProps {
  tag: ConversationFilter;
  selectedTag: ConversationFilter;
  onClick: () => void;
}

export interface NavigationButtonProps {
  text: string;
  onClick: () => void;
}

export interface CampaignCalendarProps {
  campaignId: string;
}

export interface CampaignIntallmentsProps {
  campaignId: string;
}

export interface ToggleIsActiveProps {
  campaign: Campaign;
}

export interface DebtsScreenProps {
  debts: Debt[];
  setDebts: React.Dispatch<React.SetStateAction<Debt[]>>;
  loading: boolean;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FailedEmailsProps {
  failed_emails: any; // Reemplaza 'any' con el tipo correcto de tu failed_emails
}

export interface AppFeatureProps {
  mensaje: string;
  mensajesSugeridos: String[];
}

export interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export interface CampaignCardProps {
  campaign: Campaign;
}

export interface ApiResponse {
  conversations: any[];
  // Otras propiedades si las hay
}

export interface Conversationn {
  conversation_id: { S: string };
  user_id: { S: string };
  last_message_timestamp?: { S: string };
  timestamp: { S: string };
  unread_messages?: { N: number };
  last_message_content?: { S: string };
  tags?: { L: { S: string }[] };
  handover?: { BOOL: boolean };
  unread_messages_count?: { N: number };
}

export interface UserConversationsCardProps {
  index: string;
  conversation: Conversationn[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  tagsSelected: string[];
  setTagsSelected: Dispatch<SetStateAction<string[]>>;
  onConversationSelect: (conversationId: string[]) => void;
}

export interface DropdownProps {
  tagNames: string[];
  tagsSelected: string[];
  setTagsSelected: Dispatch<SetStateAction<string[]>>;
}

export interface Message {
  completion_tokens: { L: any[] };
  content: { S: string };
  conversation_id: { S: string };
  message_id: { S: string };
  prompt_tokens: { L: any[] };
  role: { S: string };
  timestamp: { S: string };
  user_id: { S: string };
}

export interface ConversationDetailsProps {
  showUserInfo: boolean;
  setShowUserInfo: React.Dispatch<React.SetStateAction<boolean>>;
  conversationDetails: any; // Tipo de los detalles de la conversación
  messages: any[]; // Tipo de los mensajes
  handoverState: { [key: string]: boolean }; // Tipo del estado del handover
  lastConversationId: string; // Tipo del ID de la última conversación
}

export interface MessageProps {
  message: any;
}

export interface MessageListProps {
  messages: Message[];
}

export interface DebtData {
  status: string;
  last_contacted: string;
  minimum_amount: number;
  campaign_id: string;
  email: string[];
  region_code: string;
  upload_date: string;
  user_id: string;
  last_name: string;
  first_name: string;
  amount: number;
  project_id: string;
  id: string;
  phone: string[];
  dni: string;
  p2: number;
  p3: number;
  p4: number;
  p6: number;
  p12: number;
  p18: number;
  p24: number;
  debtors_ids: string[];
  payment_id: string;
}

export interface PaymentData {
  // Define las propiedades de tus datos de pago aquí
  payment_id: string;
  created: string;
  currency: string;
  customer: {
    name: string;
    identification: string;
    phone: string;
    email: string;
  };
  multicard: boolean;
  debts_ids: string[];
  url: string;
  total: number;

  // ... el resto de tus propiedades ...
}

export interface UserInfoProps {
  userId: string;
  projectId: string;
}

export interface DebtDataa {
  debts_ids: string[];
  region_code: string;
  type: string;
  id: string;
}

export interface ExcelFileUploaderProps {
  onFileUpload: (file: File) => void;
}

export type IMessage = {
  content: string;
  role: "user" | "assistant";
  comment?: string;
  message_id?: string;
  user_id?: string;
  /**
   * If the message has a role of `function`, the `name` field is the name of the function.
   * Otherwise, the name field should not be set.
   */
  name?: string;
};

export interface MessagePropss {
  messages: IMessage[];
  message: IMessage;
  index: number;
  isLoading: any;
  user_id: string;
  isRated: boolean;
}

export interface ScrollPositionState {
  [key: string]: number;
}

export interface HandoverContextType {
  handoverState: HandoverState;
  toggleHandover: (conversationId: string, value: boolean) => void;
}

export interface HandoverState {
  [conversationId: string]: boolean;
}

export interface HandoverProviderProps {
  children: ReactNode;
}

export interface AddCampaignResponseHook {
  success: boolean;
  message: string;
}

export interface CampaignHookReturnType {
  campaigns: Campaign[];
  loading: boolean;
  handleAddCampaign: (
    name: string,
    description: string,
    isActive: boolean,
    startDate: string,
    endDate: string,
    formData: FormData
  ) => Promise<AddCampaignResponseHook>;
  handleUpdateCampaign: (
    campaignId: string,
    campaignName: string,
    description: string,
    isActive: boolean,
    startDate: string,
    endDate: string
  ) => Promise<any>;
  handleUpdateCampaignConfiguration: (
    campaignId: string,
    configuration: CampaignConfiguration[]
  ) => Promise<any>;
  handleUpdateInstallmentsConfiguration: (
    campaignId: string,
    installments: CampaignInstallmentsConfiguration
  ) => Promise<any>;
  handleDeleteCampaign: (campaignId: string) => Promise<void>;
  getCampaignData: (campaignId: string) => Campaign | undefined;
}

export interface CampaignsProviderProps {
  projectId: string;
  children: ReactNode;
}

export interface WhatsAppMessageSenderProps {
  projectID: string;
  conversationId: string;
}

export interface User {
  phone: string;
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  projects: string[]; // Add projects field
  [key: string]: string | string[]; // Update the type for additional fields
}

export interface Projectt {
  project_id: string;
  name: string;
}

export interface UseDebtsResponse {
  debts: Debt[];
  isLoading: boolean;
  error: string | null;
}

export interface Campaignn {
  id: string;
  name: string;
  start_date: string;
  context: string;
  is_active: boolean;
  project_id: string;
}

export interface UseAllCampaignsResponse {
  allCampaigns: Campaignn[];
  isLoading: boolean;
  error: string | null;
}

export interface FetchMessagesOptions {
  conversationsIds: string[];
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TagChipProps {
  tag: string;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tag: string
  ) => void; // Ahora acepta el evento y el tag
}

export interface RoleBadgeProps {
  role: string;
  isExpanded?: boolean; // Agrega el parámetro opcional isExpanded
}

export interface NoticeCardProps {
  title: string;
  content: ReactNode;
  icon: ReactNode;
}

//necesito esto para la interface de abajo
export const modalVariants = cva(
  "fixed inset-0 flex items-center justify-center z-50 overflow-auto",
  {
    variants: {
      size: {
        default: "",
        large: "lg:max-w-2xl",
        small: "sm:max-w-md",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  children: React.ReactNode;
  show: boolean;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface DateBadgeProps {
  date: string;
  isStartDate?: boolean;
}

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 dark:bg-gray-950 text-gray-50 hover:bg-gray-900/90 dark:text-gray-200 dark:hover:bg-gray-900",
        destructive:
          "bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
        outline:
          "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface Userr {
  id: string;
  role: string; // Cambiado a array de strings
}

export interface UserRowProps {
  user: Userr;
  onUpdateRoles: (updatedRoles: string[]) => void;
  isCurrentUser: boolean;
  isAdmin: boolean;
}

export interface TeamTableProps {
  projectUsers: Userr[];
}

export interface AgregarMiebroProps {
  projectUsers: Userr[];
}

export interface EditUserRolesProps {
  selectedRole: string;
  handleRoleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface WhatsAppIntegrationProps {
  projectID: string;
  projectName: string;
}

export interface EmailIntegrationProps {
  project_id: string;
  setEmailSender: React.Dispatch<React.SetStateAction<string>>;
  emailSender: string;
  setRefreshingEmailSender: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SystemPrompt = {
  system_prompt: string;
  timestamp: number;
};

export interface PromptModalProps {
  systemPrompt: SystemPrompt[];
  setPromptModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

export interface DataItem {
  name: string;
  value: number;
}
export interface Data2 {
  campaign_name: string;
  successful_emails: number;
  error_emails: number;
}

export interface Data3 {
  campaign_name: string;
  successful_messages: number;
  error_messages: number;
}

export interface DebtDataa {
  name: string;
  collectedDebt: number;
  uncollectedDebt: number;
}

export interface ProjectCardProps {
  project: {
    name: string;
    project_id: string;
  };
  index: number;
}

export interface NewDocumentProps {
  projectId: string;
  collectionId: string;
  setNewDocument: React.Dispatch<React.SetStateAction<boolean>>;
  setCollectionData: React.Dispatch<
    React.SetStateAction<CollectionsData | null>
  >;
}

export interface CardProps {
  projectId: string;
  collectionId: string;
  id: string;
  keywords: string;
  data: string;
  index: number;
  setCollectionData: React.Dispatch<
    React.SetStateAction<CollectionsData | null>
  >;
}

export interface CardPropss {
  reloadedJwt: string;
  projectId: string;
}

export interface PromptModalPropss {
  reloadedJwt: string;
  projectId: string;
  fileName: string;
  collectionId: string;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type s = {
  id: string;
  name: string;
  description: string;
};

export interface CardPropsss {
  reloadedJwt: string;
  collection: s;
  index: number;
  projectId: string;
}

export interface RatingCardProps {
  rating: any; // Reemplaza 'any' con el tipo correcto de tu rating
}

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export interface ChangeStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export interface AuthProps {
  user: any; // Specify the 'user' type according to its structure, 'any' is used for simplicity here
}

export interface Projecttt {
  project_id: string;
  name: string;
  role?: string;
}

export interface ProjectsContextType {
  projectData: Projecttt[];
  isLoading: boolean;
  error: Error | null;
  fetchProjectsData: () => Promise<Projecttt[]>;
  getRoleByProjectId: (projectId: string) => Promise<string> ;
  getProjectName: (projectId: string) => string;
}

export type Collectionss = {
  id: string,
  name: string,
  description: string
  deleted: boolean
}

export interface FetchRatingsResponse {
  statistics?: {
    total_ratings: number;
    positive_ratings: number;
    negative_ratings: number;
  };
  ratings: Rating[];
}

export interface UpdateRolesFunction {
  (roles: string[]): void;
}

export interface AuthContextType {
  user: any; // Aquí puedes especificar el tipo de usuario
  jwt: string | null;
  error: string;
  isSuper: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithMail: (email: string, pass: string) => Promise<void>;
  registerWithEmail: (
    email: string,
    pass: string,
    fullname: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<any>>; // Cambia 'any' por el tipo de usuario correspondiente
  reloadJWT: () => Promise<string | undefined>;
  checkJWT: () => Promise<boolean | undefined>;
  handleResetPassword: (email:string) => Promise<void>
  getUserProjects:() => Promise<Projecttt[]>
}

export type SignInResult = { user: any } | { error: any };


export interface DebtsHeaderProps {
  campaign: Campaign | undefined;
  campaignId: string;
  isSuperUser: boolean;
  debts: Debt[];
  paidDebtsCount: number;
  totalDebtAmount: number;
  totalPagado: number;
  totalNoPagado: number;
}


export interface CustomizeModelProps {
  isAdmin: boolean;
}

export const columnOrder = [
  "id",
  "first_name",
  "last_name",
  // "project_id",
  // "campaign_id",
  "amount",
  "email",
  "status",
  "dni",
  "region_code",
  "phone",
  "user_id",
  "link_id",
  "domain_id",
  "minimum_amount",
  "p2",
  "p3",
  "p4",
  "p6",
  "p12",
  "p18",
  "p24",
  //"last_contacted",
  // "upload_date",
  "is_deleted",
];

export const spanishColumnNames: Record<string, string> = {
  id: "ID de Deuda",
  first_name: "Nombre",
  last_name: "Apellido",
  project_id: "Acreedor",
  campaign_id: "Campaña de Cobranza",
  amount: "Monto de deuda",
  email: "EMAILS del Deudor",
  status: "Estado de cobranza",
  dni: "DNI",
  // region_code: "Codigo de region",
  phone: "Teléfonos",
  // user_id: "ID de usuario",
  minimum_amount: "Recupero minimo",
  link_id: "PDF ID",
  domain_id: "DOMINIO",
  cuotas: "Cuotas",
  p2: "Pago en 2 cuotas",
  p3: "Pago en 3 cuotas",
  p4: "Pago en 4 cuotas",
  p6: "Pago en 6 cuotas",
  p12: "Pago en 12 cuotas",
  p18: "Pago en 18 cuotas",
  p24: "Pago en 24 cuotas",
  last_contacted: "Último contacto",
  upload_date: "Fecha de carga del deudor",
};

export interface DebtRowProps {
  debt: Debt;
  visibleColumns: string[];
  isAdmin: boolean;
}
export interface UserDetailsProps {
  role:string;
}
