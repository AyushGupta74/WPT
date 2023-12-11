//REST Parameters = Variable args 
//only one rest parameter for a func
//rest parameters will be last arg
function total(...nums)
{
    let sum =0
    for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
    }
    return sum
}

console.log(total(1,2,3,4,5,6))

console.log("hi","how r you","go to hell","goodbye")





