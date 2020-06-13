/**
 * Storage 封装
 */
const STORAGE_KEY = 'mall';

export default {
  setItem: function(k, v, module_name){
    if(module_name){
      let val = this.getItem(module_name)
      val[k] = v; 
      this.setItem(module_name, val)
    }else{
      let val = this.getStorage();
      val[k] = v;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  getItem: function(key, module_name){
    if(module_name){
      let val = this.getItem(module_name)
      if(val) return val[key]
    }

    return this.getStorage()[key]
  },
  getStorage: function(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear: function(k, module_name){
    let val = this.getStorage();
    if(module_name){
      if(!val[module_name[k]]){ return }
      delete val[module_name][k];
    }else{
      delete val[k]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}
