export type Emails = {
    'confirm-account': string
}

export type Endpoints = {
    emails: Emails
}

export const endpoints : Endpoints = {
    emails: {
        'confirm-account': 'api/useraccess/confirm-account'
    }
}