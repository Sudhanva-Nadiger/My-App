import {DialogContent, DialogTitle, FormGroup, TextField} from "@mui/material";

export default function EditCard() {
    return (
        <>
            <DialogTitle>Edit Form</DialogTitle>
            <DialogContent>
                <FormGroup sx={{ pt: "1rem", gap: '1rem' }}>
                    <TextField
                        helperText="Please enter card name (required)"
                        label="name"
                        required
                    />
                    <TextField
                        helperText="Please enter card link (required)"
                        label="link"
                        required
                    />
                </FormGroup>
            </DialogContent>
        </>
    )
}
