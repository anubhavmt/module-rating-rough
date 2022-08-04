# cook your dish here

arr=input()
n=len(arr)

st=[]
ans=[]

l=-1
r=-1

for i in range(n):
    
    letter=arr[i]
    if len(st)==0:
        st.append(i)

    elif arr[st[-1]]=='(' and arr[i]==')':
        
        l=st[-1]
        r=i
        st.pop()
    
    elif arr[st[-1]]=='{' and arr[i]=='}':
        l=st[-1]
        r=i
        st.pop()

    elif arr[st[-1]]=='[' and arr[i]==']':
        l=st[-1]
        r=i
        st.pop()

    else:
        if(l!=-1):
        
            res=""
            while l<=r:
                res+=arr[l]
                l=l+1
            ans.append(res)
        
        l=-1
        r=-1
        st.append(i)
    
if(l!=-1):
        
    res=""
    while l<=r:
        res+=arr[l]
        l=l+1
        ans.append(res)


print(ans)
    