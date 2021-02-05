import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import BasicTable from './Table';
import Avatar from '@material-ui/core/Avatar';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({

    labelView: {
        fontSize: '13px',
    },
    labelSpacing: {
        paddingBottom: theme.spacing(1),
        font: 'normal normal 600 13px/17px Montserrat'
    },
    labelName: {
        opacity: 0.65,
        font: 'normal normal normal 13px/17px Montserrat'
    },
    dividerSpacing: {
        marginBottom: theme.spacing(1),
    },
    imageView: {
        width: theme.spacing(17),
        height: theme.spacing(17),
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '3px'
    },
    tabView: {
        marginRight: '3px',
        backgroundColor: '#2E2E2E',
        fontSize: '13px'
    }
}));

export default function SimpleTabs(props) {

    const personalInfo = [
        { label: 'Full Name', value: 'fullName' },
        { label: 'Sub Caste', value: 'subCaste' },
        { label: 'Caste', value: 'caste' },
        { label: 'Married', value: 'married' },
        { label: 'Phone No', value: 'phoneNo' },
        { label: 'DOB', value: 'dob' },
        { label: 'Nationality', value: 'nationality' },
        { label: 'Blood Group', value: 'bloodGroup' },
        { label: 'Education', value: 'education' },
        { label: 'Aadhar Card No', value: 'aadharCardNo' },
        { label: 'Voter Card No', value: 'voterCardNo' },
        { label: 'Driving License', value: 'drivingLicense' },
        { label: 'Passport No', value: 'passportNo' },
        { label: 'PAN Card No', value: 'PANCardNo' },
        { label: 'Bank Acc', value: 'bankAcc' },
        { label: 'Address', value: 'address' }
    ];

    const personalData = {
        fullName: 'Raju Ram Kumar (35 Yrs)',
        subCaste: 'Baghi Nagalu',
        caste: 'SC',
        married: 'Yes',
        phoneNo: '+91 9876543210, 9876543210',
        dob: '23/02/1985',
        nationality: 'Indian',
        bloodGroup: 'B +ve',
        education: '10th',
        aadharCardNo: '4532 3498 4567',
        voterCardNo: 'ABC1234567',
        drivingLicense: 'MHBA 12345678901',
        passportNo: 'NA',
        PANCardNo: 'EDXS8760P',
        bankAcc: 'Andhra Bank (4567123478901234), Gramina Bank (4567123478901234)',
        address: '12/3A/335, Masid Banda, Kondapur, Hyd - 509003.'
    };


    const connectionInfo = [
        { label: 'Children', value: 'children' },
        { label: '1st Children Name', value: 'firstChildrenName' },
        { label: '2st Children Name', value: 'secondChildrenName' },
        { label: 'Brother', value: 'brother' },
        { label: 'Brother Name', value: 'brotherName' },
        { label: 'Wife Name', value: 'wifeName' },
        { label: 'Mother Name', value: 'motherName' },
        { label: 'Father Name', value: 'fatherName' },
    ];

    const connectionData = {
        children: 'xx',
        firstChildrenName: 'xx',
        secondChildrenName: 'xx',
        brother: 'xx',
        brotherName: 'xx',
        wifeName: 'xx',
        motherName: 'xx',
        fatherName: 'xx'
    };

    const physicalFeaturesInfo = [
        { label: 'Mole', value: 'mole' },
        { label: 'Skin Color', value: 'SkinColor' },
        { label: 'Eye Color', value: 'eyeColor' },
        { label: 'Height', value: 'height' },
        { label: 'Dumb', value: 'dumb' },
        { label: 'Deaf', value: 'deaf' },
        { label: 'Leg Missing', value: 'legMissing' },
        { label: 'Arm Missing', value: 'armMissing' },
        { label: 'Finger Missing', value: 'fingerMissing' },
    ];

    const physicalFeaturesData = {
        mole: 'xx',
        SkinColor: 'xx',
        eyeColor: 'xx',
        height: 'xx',
        dumb: 'xx',
        deaf: 'xx',
        legMissing: 'xx',
        armMissing: 'xx',
        fingerMissing: 'xx'
    };


    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.setMaxWidth(newValue === 3 ? 'lg' : 'md');
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                centered
            >
                <Tab label="PERSONAL INFO" {...a11yProps(0)} className={classes.tabView} />
                <Tab label="CONNECTION" {...a11yProps(1)} className={classes.tabView} />
                <Tab label="PHYSICAL FEATURES" {...a11yProps(2)} className={classes.tabView} />
                <Tab label="CRIMES COMMITTED" {...a11yProps(3)} className={classes.tabView} />
            </Tabs>
            <TabPanel value={value} index={0} >
                <Grid container >
                    <Grid item xs={12} sm={9}>
                        <Grid container className={classes.labelView}>
                            {personalInfo.map((data, index) =>
                                <React.Fragment key={index.toString()}>
                                    <Grid item xs={12} sm={3} className={classes.labelSpacing + ' ' + classes.labelName} >
                                        {data.label}:
                                </Grid>
                                    <Grid item xs={12} sm={9} className={classes.labelSpacing}>
                                        {personalData[data.value]}
                                    </Grid>
                                </React.Fragment>
                            )}
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Avatar variant="square" alt="User Profile" src="" className={classes.imageView} />
                    </Grid>
                </Grid>

            </TabPanel>
            <TabPanel value={value} index={1} >
                <Grid item xs={12} className={classes.labelSpacing}>
                    Family
                </Grid>
                <Divider className={classes.dividerSpacing} />

                <Grid container className={classes.labelView}>
                    {connectionInfo.map((data, index) =>
                        <React.Fragment key={index.toString()}>
                            <Grid item xs={12} sm={3} className={classes.labelSpacing + ' ' + classes.labelName} >
                                {data.label}:
                                </Grid>
                            <Grid item xs={12} sm={9} className={classes.labelSpacing}>
                                {connectionData[data.value]}
                            </Grid>
                        </React.Fragment>
                    )}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2} >
                <Grid container className={classes.labelView}>
                    {physicalFeaturesInfo.map((data, index) =>
                        <React.Fragment key={index.toString()}>
                            <Grid item xs={12} sm={3} className={classes.labelSpacing + ' ' + classes.labelName} >
                                {data.label}:
                                </Grid>
                            <Grid item xs={12} sm={9} className={classes.labelSpacing}>
                                {physicalFeaturesData[data.value]}
                            </Grid>
                        </React.Fragment>
                    )}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <BasicTable />
            </TabPanel>
        </>
    );
}