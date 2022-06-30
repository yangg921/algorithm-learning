// 给出的字符串为"25525522135",
// 返回["255.255.22.135", "255.255.221.35"]. (顺序没有关系)
// 首尾不为0


// 方法一：普通枚举通过.位置
export function stringToIP(str:string):Array<string>{
    const len = str.length
    const test = /^0/
    const test2 = /0$/
    if(test.test(str) || test2.test(str)) return ['IP格式错误']
    let arr:Array<string> = []
    if(len>12 ||len<4) return ['长度超出']
    for(let i = 1;i<4 && i<len-2;i++){
        for(let j=i+1;j<len-1 && j<i+4;j++){
            for(let k=j+1;k<len && k<j+4;k++){
                if(len-k<4){
                    if(Number(str.slice(i,j))>255 ||Number(str.slice(j,k))>255||Number(str.slice(k,len))>255||Number(str.slice(0,i))>255) {
                        continue
                    }
                    arr.push(`${str.slice(0,i)}.${str.slice(i,j)}.${str.slice(j,k)}.${str.slice(k,len)}`)
                    }
                }
            }
        }
    return arr
}

// 方法二： 递归

export function stringToIP2(s:string):Array<string>{
        if(s.length <= 3) return []
        let len = s.length - 1
        let ans = []
        function judge(start:number , end:number){
            let numStr = s.split("").slice(start,end).join("")
            let num = Number(numStr)
            if((numStr.length > 1 && numStr[0] == '0') || num > 255 ){
                return true
            }
            return numStr
        }
        for(let i = 1 ; i <= len - 2 ; i++){
            if(judge(0 , i) === true)
                continue;
            for(let j = i + 1 ; j <= len - 1 ; j++){
                if(judge(i , j) === true)
                    continue
                for(let k = j + 1 ; k <= len ; k++){
                    if(judge(j , k) === true)
                        continue
                    if(judge(k , len + 1) === true)
                        continue
                    ans.push(judge(0 , i) + '.' + judge(i , j) + '.' + judge(j , k) + '.' + judge(k , len + 1))
                }
            }
        }
        return ans
    }



