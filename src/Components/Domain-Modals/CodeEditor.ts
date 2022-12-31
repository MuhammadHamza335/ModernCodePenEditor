export interface IEditor {
  Title: string;
  Language: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
