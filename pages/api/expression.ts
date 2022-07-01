export default function diffWaysToCompute(expression: string):number[] | string[]{
    const len = expression.length
    const arr:number[] = []
    for(let i = 0;i<=len;i++){
        let left:number[] | string[]
        let right:number[] | string[]
        if(['*','-','+'].includes(expression[i])){
            const s = expression[i]
            left = diffWaysToCompute(expression.substring(0,i)) as number[]
            right = diffWaysToCompute(expression.substring(i+1)) as number[]
            for (let j of left){
                for (let k of right){
                    if(s === '*') {
                        arr.push(j*k)
                    }if(s === '-') {
                        arr.push(j-k)
                    }if(s === '+') {
                        arr.push(j+k)
                    }
                }
            }
        }
    }
    return arr.length>0?arr:[expression]
};
