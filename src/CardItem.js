import {Card, CardContent, Typography} from "@mui/material";


export default function CardItem({data}) {

    const cardStyle = { maxWidth: "275px", margin: "5px"}

    return (
        <Card sx={cardStyle}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2">
                    {data.subtitle}
                </Typography>
            </CardContent>
        </Card>
    )
}
