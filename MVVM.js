class MVVM{
    constructor(el,data){
        this.el = document.querySelector(el)
        this._data  = data;
        this.init();
        this.domPool ={}
    }

    init(){
        this.initData();
        this.initDom();
    }

    initDom(){
        this.bindDom(this.el)
        this.bindInput(this.el);
    }

    bindDom(el){
        const childNodes = el.childNodes;

        childNodes.forEach(item=>{
            
            if(item.nodeType ===3){
                const _value = item.nodeValue;
                

                if(_value.trim().length){
                    let _isValid  =  /\{\{(.+?)\}\}/.test(_value);
                    if(_isValid){
                        console.log(item);
                    }
                }
            }

            item.childNodes && this.bindDom(item)
        })
    }

    bindInput(el){
        const _allInputs = el.querySelectorAll('input');
        
       
        _allInputs.forEach(input=>{
            const _vmodels = input.getAttribute('v-model')
            


            if(_vmodels){
                input.addEventListener('keyup',this.handleInput.bind(this,_vmodels,input),false)
            }
        })

       
    }

    handleInput(key,input){
        const _value = input.value
        this.data[key]  = _value 
        
    }

   

    initData(){
        
        const _this = this;
        this.data = {};

        for(let key in this._data){
            
            Object.defineProperty(this.data,key,{
                get(){
                    
                    
                    return _this._data[key];
                },
                set(newVal){
                    
                    
                    _this._data[key] = newVal;
                }
            })
        }

        
        this.data['name']='WOSHI'
    }
}