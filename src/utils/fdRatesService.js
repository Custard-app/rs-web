import { db } from '@/firebase';
import {
    collection,
    doc,
    getDocs,
    setDoc,
    updateDoc,
    addDoc,
    query,
    orderBy
} from 'firebase/firestore';

// Default FD rates data structure
export const defaultFdRates = {
    'shriram-finance': {
        id: 'shriram-finance',
        companyName: 'Shriram Finance',
        logo: '/rupeestop_assets/Fixed Deposits/Images/shriram.png',
        description: 'Corporate Fixed Deposits of Shriram Finance have been rated \'AAA\' by two leading credit rating agencies (CRISIL and ICRA) for the last 23 years.',
        features: [
            'Trusted by over 5 lakh customers',
            'Fixed Deposits worth more than ₹50,000 crore booked',
            'Special tenure of 18, 22, 33, 42, and 44 months – Offering higher returns',
            'Up to 0.40% p.a. extra interest for senior citizens',
            'Flexible interest payout options – Choose from Monthly, Quarterly, Half-yearly, Annually, or at Maturity'
        ],
        rateTable: [
            { tenure: '12 months', rate: '7.10%', maturityValue: '10,710' },
            { tenure: '18 months', rate: '7.35%', maturityValue: '11,120.58' },
            { tenure: '22 months', rate: '7.60%', maturityValue: '11,416.67' },
            { tenure: '33 months', rate: '7.85%', maturityValue: '12,249.59' },
            { tenure: '42 months', rate: '8.05%', maturityValue: '12,995.89' },
            { tenure: '44 months', rate: '8.10%', maturityValue: '13,168.89' },
            { tenure: '60 months', rate: '7.75%', maturityValue: '14,354.84' }
        ],
        notes: [
            'Minimum deposit amount: ₹15,000 for cumulative option.',
            'Interest rates are subject to change as per the company\'s discretion.',
            'Up to 0.40% p.a. extra interest for senior citizens'
        ],
        bookingLink: 'https://calendly.com/llprupeestop/30min',
        order: 1
    },
    'bajaj-finserv': {
        id: 'bajaj-finserv',
        companyName: 'Bajaj Finserv',
        logo: '/rupeestop_assets/Fixed Deposits/Images/bajaj.png',
        description: 'Rated \'AAA\' by CRISIL & [ICRA] AAA(STABLE) – Ensuring High Safety & Stability',
        features: [
            'Trusted by over 5 lakh customers',
            'Fixed Deposits worth more than ₹50,000 crore booked',
            'Special tenure of 18, 22, 33, 42, and 44 months – Offering higher returns',
            'Up to 0.40% p.a. extra interest for senior citizens',
            'Flexible interest payout options – Choose from Monthly, Quarterly, Half-yearly, Annually, or at Maturity'
        ],
        rateTable: [
            { tenure: '12 months', rate: '6.85%', maturityValue: '10,685' },
            { tenure: '18 months', rate: '7.10%', maturityValue: '11,095.58' },
            { tenure: '22 months', rate: '7.35%', maturityValue: '11,383.33' },
            { tenure: '33 months', rate: '7.60%', maturityValue: '12,207.59' },
            { tenure: '42 months', rate: '7.80%', maturityValue: '12,935.89' },
            { tenure: '44 months', rate: '7.85%', maturityValue: '13,098.89' },
            { tenure: '60 months', rate: '7.50%', maturityValue: '14,204.84' }
        ],
        notes: [
            'Minimum deposit amount: ₹15,000 for cumulative option.',
            'Interest rates are subject to change as per the company\'s discretion.',
            'Up to 0.40% p.a. extra interest for senior citizens'
        ],
        bookingLink: 'https://calendly.com/llprupeestop/30min',
        order: 2
    },
    'mahindra-finance': {
        id: 'mahindra-finance',
        companyName: 'Mahindra Finance',
        logo: '/rupeestop_assets/Fixed Deposits/Images/mahindra.png',
        description: 'Rated \'MAAA\' by ICRA & \'AAA\' by CRISIL – Ensuring High Safety & Stability',
        features: [
            'Trusted investment option with strong ratings',
            'Flexible tenure options available',
            'Competitive interest rates',
            'Easy investment process',
            'Reliable financial institution backing'
        ],
        rateTable: [
            { tenure: '12 months', rate: '6.75%', maturityValue: '10,675' },
            { tenure: '18 months', rate: '7.00%', maturityValue: '11,055.58' },
            { tenure: '24 months', rate: '7.25%', maturityValue: '11,500' },
            { tenure: '36 months', rate: '7.50%', maturityValue: '12,362.50' },
            { tenure: '48 months', rate: '7.60%', maturityValue: '13,305.07' },
            { tenure: '60 months', rate: '7.70%', maturityValue: '14,423.19' }
        ],
        notes: [
            'Minimum deposit amount: ₹10,000 for cumulative option.',
            'Interest rates are subject to change as per the company\'s discretion.',
            'Additional benefits for senior citizens may apply'
        ],
        bookingLink: 'https://calendly.com/llprupeestop/30min',
        order: 3
    },
    'pnb-housing': {
        id: 'pnb-housing',
        companyName: 'PNB Housing Finance',
        logo: '/rupeestop_assets/Fixed Deposits/Images/pnb.png',
        description: 'High Safety Assurance – Rated \'AA+/Stable\' by CARE & \'AA+/Positive\' by CRISIL',
        features: [
            'Secure & Reliable – Enjoy peace of mind with highly rated fixed deposits',
            'Attractive Interest Rates – Competitive returns on your investment',
            'Higher Interest for Seniors – Additional 0.30% p.a. interest for senior citizens',
            'Flexible Deposit Options – Choose from a variety of tenures to suit your needs'
        ],
        rateTable: [
            { tenure: '12 months', rate: '6.60%', maturityValue: '10,660' },
            { tenure: '24 months', rate: '7.00%', maturityValue: '11,440' },
            { tenure: '36 months', rate: '7.20%', maturityValue: '12,312.50' },
            { tenure: '48 months', rate: '7.40%', maturityValue: '13,305.07' },
            { tenure: '60 months', rate: '7.60%', maturityValue: '14,423.19' }
        ],
        notes: [
            'Minimum deposit amount: ₹10,000 for cumulative option.',
            'Interest rates are subject to change as per the company\'s discretion.',
            'Additional 0.30% p.a. interest for senior citizens'
        ],
        bookingLink: 'https://calendly.com/llprupeestop/30min',
        order: 4
    }
};

// Fetch all FD rates from Firestore
export const getFdRates = async () => {
    try {
        const fdRatesRef = collection(db, 'fdRates');
        const q = query(fdRatesRef, orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            // If no data in Firestore, return default data
            return Object.values(defaultFdRates);
        }

        const fdRates = [];
        querySnapshot.forEach((doc) => {
            fdRates.push({ id: doc.id, ...doc.data() });
        });

        return fdRates;
    } catch (error) {
        console.error('Error fetching FD rates:', error);
        // Return default data in case of error
        return Object.values(defaultFdRates);
    }
};

// Update or create FD rate for a company
export const updateFdRate = async (companyId, fdRateData) => {
    try {
        const fdRateRef = doc(db, 'fdRates', companyId);
        await setDoc(fdRateRef, fdRateData, { merge: true });
        return { success: true, message: 'FD rate updated successfully' };
    } catch (error) {
        console.error('Error updating FD rate:', error);
        return { success: false, message: 'Failed to update FD rate' };
    }
};

// Initialize default data in Firestore (for first time setup)
export const initializeDefaultFdRates = async () => {
    try {
        console.log('Starting FD rates initialization...');
        console.log('Database instance:', db);

        const fdRatesRef = collection(db, 'fdRates');
        console.log('Collection reference created:', fdRatesRef);

        const querySnapshot = await getDocs(fdRatesRef);
        console.log('Query executed, snapshot empty:', querySnapshot.empty);
        console.log('Query size:', querySnapshot.size);

        if (querySnapshot.empty) {
            console.log('Database is empty, uploading default data...');

            // Upload default data one by one with logging
            for (const [companyId, fdRateData] of Object.entries(defaultFdRates)) {
                console.log(`Uploading data for company: ${companyId}`);
                const docRef = doc(db, 'fdRates', companyId);
                await setDoc(docRef, fdRateData);
                console.log(`Successfully uploaded: ${companyId}`);
            }

            console.log('All default data uploaded successfully');
            return { success: true, message: 'Default FD rates initialized successfully' };
        }

        console.log('FD rates already exist in database');
        return { success: true, message: 'FD rates already exist in database' };
    } catch (error) {
        console.error('Error initializing default FD rates:', error);
        console.error('Error details:', error.message);
        console.error('Error stack:', error.stack);
        return { success: false, message: `Failed to initialize default FD rates: ${error.message}` };
    }
};
