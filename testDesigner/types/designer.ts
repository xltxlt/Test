export interface DesignerField {
  formType: number | string;
  fieldName: string;
  title: string;
  placeholder?: string;
  must?: boolean;
  hide?: boolean;
  props?: Record<string, any>;
  comProps?: Record<string, any>;
  comOn?: Record<string, any>;
  child?: DesignerField[];
}

export interface DesignerSchema {
  cols: number;
  formData: Record<string, any>;
  form: DesignerField[];
  options: Record<string, any[]>;
  rules: Record<string, any[]>;
  design?: boolean;
}
