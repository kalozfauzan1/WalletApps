import {observable, action} from "mobx";

export default class WalletStore {
    // this define state
    @observable wallet = [];
    @observable total;

    @action
    addWallet(type){
        this.wallet.push(type)
    }

    @action
    setTotal(){
        const total = this.wallet.count();
        this.total = total;
    }
}