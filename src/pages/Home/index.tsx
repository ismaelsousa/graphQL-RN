import {useMutation, useQuery} from '@apollo/client';
import React, { useEffect } from 'react';
import {ActivityIndicator, FlatList, Pressable, StyleSheet, Text} from 'react-native';
import {SET_LIFT_STATUS_MUTATION} from '../../graphql/mutations';
import {GET_COUNTRIES_QUERY} from '../../graphql/queries';

const Home = () => {
  const {data, loading, refetch} = useQuery(GET_COUNTRIES_QUERY);
  const [setLiftStatusMutation, setLiftStatusData] = useMutation(
    SET_LIFT_STATUS_MUTATION,
  );
 

  const handleStatusChange = (id: string, status: string) => {
    const newStatus = status === 'OPEN' ? 'CLOSED' : 'OPEN';

    setLiftStatusMutation({
      variables: {
        id,
        status: newStatus,
      },
    });
  };

  useEffect(() => {
    if(setLiftStatusData.called){
      setLiftStatusData.reset();
      refetch()
    }
  }, []);

  if (loading || setLiftStatusData.loading) return <ActivityIndicator/>;

  return (
    <FlatList
      data={data?.allLifts}
      renderItem={({item}) => (
        <Pressable onPress={() => handleStatusChange(item.id, item.status)}>
          <Text style={style.container}>
            {item.id} - {item.status}
          </Text>
        </Pressable>
      )}
    />
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    fontSize: 20,
    padding: 10,
  },
});
