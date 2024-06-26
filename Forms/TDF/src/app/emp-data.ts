export class EmpData {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public address: string,
    public city: string,
    public state: string,
    public pincode: string,
    public country: string,
    public gender: string,
    public skills: string[],
    public department: string
  ) {}
}
