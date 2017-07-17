export class User {
  constructor(
    public id: number = null,
    public lastname: string = "",
    public firstname: string = "",
    public email: string = "",
    public passwood: string = "",
    public address: string = "",
    public unit: string = "",
    public city: string = "",
    public state: string = ""
  );
}
