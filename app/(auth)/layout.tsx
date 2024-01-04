const Layout = ({children}: {children:React.ReactNode})=>{
    return (
        <div className=" flex items-center justify-center min-h-screen bg-primary-50">
            {children}
        </div>
    )
}
export default Layout;