import { useEffect, useState } from 'react';
interface IAppStore {
  name: string;
  [key: string]: any;
}
class AppStore {
  private static instance: AppStore | undefined;
  private store: IAppStore;
  private obervers: any[] = [];
  constructor() {
    this.store = { name: '' };
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AppStore();
    }
    return this.instance;
  }

  suscribe(observer: any) {
    this.obervers.push(observer);
  }

  notifySuscribers() {
    this.obervers.forEach((observer) => observer.update(this.store));
  }

  updateStore(changes: { [key: string]: any }) {
    this.store = { ...this.store, ...changes };
    this.notifySuscribers();
  }
}

export function useAppStore(subscriberName: string) {
  const [store, setInternalStore] = useState({} as IAppStore);
  const appstoreInstance = AppStore.getInstance();
  const updateStore = (changes: IAppStore) => {
    appstoreInstance.updateStore(changes);
  };
  useEffect(() => {
    const internalSubscriber = {
      name: subscriberName,
      update(store: IAppStore) {
        setInternalStore(store);
      },
    };
    appstoreInstance.suscribe(internalSubscriber);
  }, []);

  return { store, updateStore };
}
