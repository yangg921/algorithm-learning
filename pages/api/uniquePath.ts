// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
//
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
//
// 问总共有多少条不同的路径？


export default function uniquePaths(m: number, n: number): number {
    // const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const dp:Array<Array<number>> = new Array<Array<number>>()

    for (let i = 0;i<m;i++){
        dp.push([i])
        for (let j=0;j<n;j++){
            dp[i].push(j)

        }
    }

    for(let i=0;i<m;i++){
        dp[i][0] = 1
    }

    for(let i=0;i<n;i++){
        dp[0][i] = 1
    }

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
