import {Box, DialogContent, DialogTitle } from "@mui/material";

export default function VideoPlayer({ link }) {
    return (
        <>
            <DialogTitle>Video</DialogTitle>
            <DialogContent>
                <Box>
                    <iframe style={{ width: '100%', aspectRatio: '1.78' }} src="https://www.youtube.com/embed/kJQP7kiw5Fk" allowFullScreen></iframe>
                </Box>
            </DialogContent>
        </>
    )
}
