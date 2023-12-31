import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main,
}));

const StatCards = () => {
  const cardList = [
    { name: 'Plan a Match', amount: 3050, icon: 'group', page: '/pages/addPlayer' },
    { name: 'Teams and Players', amount: '$80,500', icon: 'attach_money', page: '/pages/addPlayer' },
    { name: 'Create New Report', amount: '8.5% Stock Surplus', icon: 'store', page: '/pages/addPlayer' },
    { name: 'Positions', amount: '305 Orders', icon: 'shopping_cart', page: '/pages/addPlayer' },
    { name: 'Unfinished Reports', amount: 3050, icon: 'group', page: '/pages/addPlayer' },
    { name: 'Assessment parameter', amount: '$80,500', icon: 'attach_money', page: '/pages/addPlayer' },
    { name: 'Finished Reports', amount: '8.5% Stock Surplus', icon: 'store', page: '/pages/addPlayer' },
    { name: 'Match Details', amount: '305 Orders', icon: 'shopping_cart', page: '/pages/addPlayer' },
    { name: 'Compare Players', amount: 3050, icon: 'group', page: '/pages/addPlayer' },
    { name: 'My Brand', amount: '$80,500', icon: 'attach_money', page: '/pages/addPlayer' },
    { name: 'My Videos', amount: '8.5% Stock Surplus', icon: 'store', page: '/pages/addPlayer' },
    { name: 'My Account', amount: '305 Orders', icon: 'shopping_cart', page: '/pages/addPlayer' },
  ];

  const navigate = useNavigate()

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                {/* <Small>{item.name}</Small> */}
                <Heading>{item.name}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton onClick={() => navigate(item.page)}>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
