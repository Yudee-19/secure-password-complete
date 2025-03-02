import { MouseEventHandler } from 'react';
export default interface GetStartedItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    completionTime: string;
    completed?: boolean;
    onclick?:MouseEventHandler<HTMLDivElement>;
  }