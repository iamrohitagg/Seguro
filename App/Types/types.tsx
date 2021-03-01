export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  Home: undefined;
  ChatRoom: undefined;
};

export type TabOneParamList = {
  Home: undefined;
  Login: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: string;
  status: String;
};

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  // user: User;
};

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};

export type ChatMessageProps = {
  messages: Message;
};
