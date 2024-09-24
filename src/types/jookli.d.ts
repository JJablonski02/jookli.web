interface NodeProperty {
    id: string
    title: string
    field_location: {
      name: string
      jookli_internal__tig: string
    }
  }
  
  export interface JookliMetatag {
    tag: string
    attributes: {
      content: string
      name?: string
      rel?: string
    }
  }

  export interface JookliException {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string | null;
    error_code: number;
    error_description: string;
    error_severity: number;
    exceptionDetails: ExceptionDetail[];
    traceId: string;
}

export interface ExceptionDetail {
    message: string;
    source: string;
    stackTrace: string;
}