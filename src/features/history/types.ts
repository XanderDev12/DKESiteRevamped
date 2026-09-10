export interface SourceReference {
  label: string;
  url?: string;
}

export interface HistoryEntry {
  body?: readonly string[];
  dateLabel?: string;
  id: string;
  sources?: readonly SourceReference[];
  title: string;
}
