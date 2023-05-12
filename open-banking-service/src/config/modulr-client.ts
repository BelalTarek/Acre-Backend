import modulrClient from 'modulr-client';

import type { services, } from 'modulr-client';


class ModulrClient {
  init = async (): Promise<services> => await modulrClient();
}

export default new ModulrClient();
