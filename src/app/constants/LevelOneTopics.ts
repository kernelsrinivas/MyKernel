import { ROUTES } from "./RouteName";

export const basic = [
    {
      id: 'level-one-1',
      route: ROUTES.MOTOR,
      topic: 'Motor',
      description: 'Its used to manipulate robot pair-parts',
    },
    {
      id: 'level-one-2',
      route: ROUTES.DRIVER_ENCODER,
      topic: 'Driver & Encoder',
      description: 'Its used to control and sync with motor',
    },
    {
      id: 'level-one-3',
      route: ROUTES.BUS_IO,
      topic: 'Field Bus & I/O',
      description: 'Its used to communicate and control from controller',
    },
    {
      id: 'level-one-4',
      route: ROUTES.CONTROLLER,
      topic: 'Controller',
      description: 'Its used to manipulate robot application from fields',
    },
    {
      id: 'level-one-5',
      route: ROUTES.BATTERY,
      topic: 'Battery',
      description: 'Its used to give power source to entire system',
    },
  ];