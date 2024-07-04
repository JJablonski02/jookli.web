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