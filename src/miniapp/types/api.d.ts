interface GetSystemInfoSyncRes {
  windowWidth: number;
}

declare namespace my {
  interface My {
    SDKVersion: string;
    canIUse(
      schema: string,
    ): boolean;
    getSystemInfoSync(): GetSystemInfoSyncRes;
    createSelectorQuery(): any;
    navigateTo({ url: string }): any;
    redirectTo({ url: string }): any;
    switchTab({ url: string }): any;
    navigateBack({ delta: string }): any;
  }
}

declare const my: my.My;
