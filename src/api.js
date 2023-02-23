import axios from 'axios';

const SearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID v-gbxrUfJvuZ8o2pAal52slca87TfBf6JmgykxITipw',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default SearchImages;