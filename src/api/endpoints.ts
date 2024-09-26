export type Emails = {
    'confirm-account': string
}

export type Server = {
    'server-status' : string
}

export type Endpoints = {
    emails: Emails
    server: Server
}

export const endpoints : Endpoints = {
    emails: {
        'confirm-account': 'api/useraccess/confirm-account'
    },
    server: {
        'server-status' : 'api/server/status'
    }
}