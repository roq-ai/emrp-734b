const mapping: Record<string, string> = {
  clients: 'client',
  inventories: 'inventory',
  'machine-maintenances': 'machine_maintenance',
  'manufacturing-processes': 'manufacturing_process',
  orders: 'order',
  'order-items': 'order_item',
  products: 'product',
  'production-schedules': 'production_schedule',
  shipments: 'shipment',
  suppliers: 'supplier',
  users: 'user',
  warehouses: 'warehouse',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
