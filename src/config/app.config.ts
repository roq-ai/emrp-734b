interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Manager', 'Employee'],
  tenantName: 'Client',
  applicationName: 'Emrp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage machine maintenance', 'Manage warehouse', 'Manage shipments', 'Manage production schedule'],
  getQuoteUrl: 'https://app.roq.ai/proposal/df14d352-eadc-4ddf-904a-09b143c9e7f6',
};
