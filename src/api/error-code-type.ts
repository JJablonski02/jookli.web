/// <summary>
/// Enum representing various error codes that can be returned by the system.
/// </summary>
export enum ErrorCodeType {
  /// <summary>
  /// Error code for missing email address.
  /// </summary>
  MissingEmailAddress = 2000,

  /// <summary>
  /// Error code for passwords mismatch.
  /// </summary>
  PasswordsMismatch = 2001,

  /// <summary>
  /// Error code for an invalid password.
  /// </summary>
  InvalidPassword = 2002,

  /// <summary>
  /// Error code for when an account is deleted.
  /// </summary>
  AccountIsDeleted = 2003,

  /// <summary>
  /// Error code for when an account is blocked.
  /// </summary>
  AccountIsBlocked = 2004,

  /// <summary>
  /// Error code for an invalid service name.
  /// </summary>
  InvalidServiceName = 2005,

  /// <summary>
  /// Error code for a missing service value.
  /// </summary>
  MissingData = 2006,

  /// <summary>
  /// Error code for invalid JSON data.
  /// </summary>
  InvalidJsonData = 2007,

  /// <summary>
  /// Error code for a missing user ID parameter.
  /// </summary>
  MissingUserIdParameter = 2008,

  /// <summary>
  /// Error code for an invalid user ID.
  /// </summary>
  InvalidUserId = 2009,

  /// <summary>
  /// Error code for a missing user.
  /// </summary>
  MissingUser = 2010,

  /// <summary>
  /// Error code for an user who already exists.
  /// </summary>
  UserWithProvidedEmailAlreadyExists = 2011,

  /// <summary>
  /// Error code for invalid registration source
  /// </summary>
  InvalidRegistrationSource = 2012,

  /// <summary>
  /// Error code for invalid email address format
  /// </summary>
  InvalidEmailAddress = 2013,

  /// <summary>
  /// Error code for existing user
  /// </summary>
  UserAlreadyExists = 2014,

  /// <summary>
  /// Error code for not configured user
  /// </summary>
  UserIsNotConfigured = 2015,

  /// <summary>
  /// Error code if account is still in creation progress
  /// </summary>
  AccountCreationInProgress = 2016,

  /// <summary>
  /// Error code if card number is invalid
  /// </summary>
  InvalidCardNumber = 2017,

  /// <summary>
  /// Errorcode if paypal account is missing
  /// </summary>
  MissingPaypalAccount = 2018,

  /// <summary>
  /// Error code if paypal email address is missing
  /// </summary>
  MissingPaypalEmailAddress = 2019,

  /// <summary>
  /// Error code if bank account is missing
  /// </summary>
  MissingBankAccount = 2020,

  /// <summary>
  /// Error code if debit card does not exist
  /// </summary>
  MissingDebitCard = 2021,

  /// <summary>
  /// Error code if missing card number
  /// </summary>
  MissingCardNumber = 2022,

  /// <summary>
  /// Error code if password does not meet the requirements
  /// </summary>
  PasswordDoesNotMeetTheRequirements = 2023,

  /// <summary>
  /// Error code if password is the same as current while changing password/recovering password
  /// </summary>
  PasswordIsTheSameAsCurrent = 2024,

  /// <summary>
  /// Error code if changing emaill address and provided email is busy
  /// </summary>
  EmailAddressIsBusy = 2025,

  /// <summary>
  /// Error code if paypal account already exists
  /// </summary>
  PaypalAccountAlreadyExists = 2026,

  /// <summary>
  /// Error code if bank account already exists
  /// </summary>
  BankAccountAlreadyExists = 2027,

  /// <summary>
  /// Error code if debit card already exists
  /// </summary>
  DebitCardAlreadyExists = 2028,

  /// <summary>
  /// Error code if missing property
  /// </summary>
  MissingProperty,

  /// <summary>
  /// Error code if property is invalid
  /// </summary>
  InvalidProperty,

  /// <summary>
  /// Error code if there is not data about user account balance
  /// </summary>
  MissingUserAccountBalance,

  /// <summary>
  /// Error code if there is requested higher amount to withdraw than user owns
  /// </summary>
  UserAccountBalanceIsLessThanRequested,

  /// <summary>
  /// Error code if balance is smaller than declared amount
  /// </summary>
  AccountBalanceInsufficiency,

  /// <summary>
  /// Error code if payment details are not available
  /// </summary>
  MissingPaymentDetails,

  /// <summary>
  /// Error code if filled payment details are not valid
  /// </summary>
  InvalidPaymentDetails,

  /// <summary>
  /// Error code if currency code is not found
  /// </summary>
  CurrencyCodeNotFound,

  /// <summary>
  /// Error code if missing Google Id Token
  /// </summary>
  MissingGoogleIdToken,

  /// <summary>
  /// Error code if missing Google references
  /// </summary>
  MissingGoogleReferences,

  /// <summary>
  /// Error code if missing Apple references
  /// </summary>
  MissingAppleReferences,

  /// <summary>
  /// Error code if missing Microsoft references
  /// </summary>
  MissingMicrosoftReferences,

  /// <summary>
  /// Error code if requesting confirm account while its confirmed
  /// </summary>
  AccountIsConfirmed,

  /// <summary>
  /// Error code if requested to collect reward but threshold is not achieved
  /// </summary>
  RewardThresholdNotAchieved,

  /// <summary>
  /// Error code if reward is already collected
  /// </summary>
  RewardAlreadyCollected,

  /// <summary>
  /// Error code if email address is empty
  /// </summary>
  EmailAddressIsEmpty,

  /// <summary>
  /// Error code if first name is empty
  /// </summary>
  FirstNameEmpty,

  /// <summary>
  /// Error code if first name is too long
  /// </summary>
  FirstNameTooLong,

  /// <summary>
  /// Error code if last name is too long
  /// </summary>
  LastNameTooLong,

  /// <summary>
  /// Error code if last name is empty
  /// </summary>
  LastNameEmpty,

  /// <summary>
  /// Error code if consent is not accepted
  /// </summary>
  ConsentTrueRequired,

  /// <summary>
  /// Error code if description is empty
  /// </summary>
  DescriptionEmpty,

  /// <summary>
  /// Error code if report type is required
  /// </summary>
  ReportTypeRequired,

  /// <summary>
  /// Error code if report type is invalid
  /// </summary>
  InvalidReportType,

  /// <summary>
  /// Error code if token is expired
  /// </summary>
  TokenExpired = 1500,

  /// <summary>
  /// Error code if token is invalid
  /// </summary>
  InvalidToken = 1501,

  /// <summary>
  /// Error code if missing token owner
  /// </summary>
  MissingTokenOwner = 1502,

  /// <summary>
  /// Error code if token has been used
  /// </summary>
  TokenUsed = 1503,
}
