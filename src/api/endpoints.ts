export type Emails = {
  "confirm-account": string
  "confirm-email-change": string
}

export type Server = {
  "server-status": string
}

export type Administration = {
  report: string
}

export type User = {
  "confirm-recover-password": string
}

export type Endpoints = {
  emails: Emails
  administration: Administration
  server: Server
  user: User
}

export const endpoints: Endpoints = {
  emails: {
    "confirm-account": "api/useraccess/confirm-account",
    "confirm-email-change": "api/useraccess/confirm-email-change",
  },
  user: {
    "confirm-recover-password": "api/useraccess/password/recover",
  },
  server: {
    "server-status": "api/server/status",
  },
  administration: {
    report: "api/administration/report",
  },
}
