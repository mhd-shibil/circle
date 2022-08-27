export type Country = {
  name: string;
};

export interface User {
  id: String;
  email: String;
  password: String;
  name: String;
}

export interface Destination {
  id: String;
  name: String;
}

export interface Enquiry {
  id: String;
  user: User;
  pickUpPoint: String;
  destination: Destination;
  startDate: Date;
  returnDate: Date;
  budget: Number;
  adults: Number;
  children: Number;
  hotelStar: String;
  notes: String;
  createdAt: Date;
}
