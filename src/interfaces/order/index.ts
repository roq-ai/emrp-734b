import { OrderItemInterface } from 'interfaces/order-item';
import { ClientInterface } from 'interfaces/client';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_number: string;
  total_amount: number;
  client_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  client?: ClientInterface;
  user?: UserInterface;
  _count?: {
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_number?: string;
  client_id?: string;
  user_id?: string;
}
