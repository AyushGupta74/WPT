function reverse (str, cbf1)
{
    let newstr=''
    for(var i=str.length-1  ; i>=0;i--)
        newstr=newstr + str.charAt(i)

    //return newstr
    setTimeout(()=>{cbf1(newstr)},2000)
}

module.exports = reverse;