export type Country = {
  name: string;
};

export enum PaymentStatus {
  SUCCESS = 'succeeded',
  IN_PROGRESS = 'initiated',
  REFUND_INITIATED = 'refund initiated',
  FAILED = 'failed',
  CANCELLED = 'cancelled'
}

export enum PaymentStatusMessage {
  SUCCESS = 'Transfer successful',
  IN_PROGRESS = 'Transfer pending',
  REFUND_INITIATED = 'Refund Initiated',
  FAILED = 'Transfer failed'
}

export enum PaymentStatusIcon {
  SUCCESS = 'success-tick-icon',
  IN_PROGRESS = 'pending-icon',
  REFUND_INITIATED = 'refund-initiated-icon',
  FAILED = 'failed-icon'
}

export enum statusText {
  SUCCESS = 'Success',
  IN_PROGRESS = 'Initiated',
  REFUND_INITIATED = 'Refund Initiated',
  FAILED = 'Failed',
  CANCELLED = 'Cancelled'
}

export enum FilterText {
  DATE = 'Date Range',
  STATUS = 'Status'
}

export type TableCell = {
  label: string;
  value: string;
  custom?: any;
  type?: string;
};

export type RequestDetails = {
  id: string;
  date: string;
  destination: string;
  amount: string;
};

// TODO: find better name
export type StatusPickerCell = {
  type: PaymentStatus;
  isSelected: boolean;
};

export type FilterTabs = {
  index: number;
  label: string;
  value: FilterText;
  icons?: {
    normal: string;
    selected: string;
  };
};
