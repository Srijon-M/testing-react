import { AppProviders } from "@/providers/app-providers";
import { MuiMode } from "@/mui/mui-mode";

function MuiApp(){
    return(
        <AppProviders>
            <div className="App">
                <MuiMode />
            </div>
        </AppProviders>
    )
}

export default MuiApp;