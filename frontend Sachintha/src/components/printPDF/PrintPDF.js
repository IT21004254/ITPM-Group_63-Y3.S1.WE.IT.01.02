import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginLeft: 20,
    },
    listItem: {
      marginBottom: 10,
    },
    fieldLabel: {
      fontWeight: 'bold',
    },
  });
  

const MyDocument = ({ data }) => (
<Document>
      <Page>
        <View style={styles.container}>
            <Text>Request disasters</Text>
          {data.map((item) => (
            <View key={item._id} style={styles.listItem}>
              <Text style={styles.fieldLabel}>City:</Text>
              <Text>{item.city}</Text>
              <Text style={styles.fieldLabel}>Disaster:</Text>
              <Text>{item.disaster}</Text>
              <Text style={styles.fieldLabel}>Date:</Text>
              <Text>{item.date}</Text>
              <Text style={styles.fieldLabel}>Description:</Text>
              <Text>{item.description}</Text>
              <Text style={styles.fieldLabel}>Camps:</Text>
              <Text>{item.camps}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
);

const PDFGenerator = ({ data }) => (
  <PDFDownloadLink document={<MyDocument data={data} />} fileName="report.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Generating PDF...' : 'Download PDF'
    }
  </PDFDownloadLink>
);

const MyComponent = (props) => {
    console.log(props.data,"props data")
  const jsonData = props.data

  return (
    <div>
      {/* Other components */}
      <PDFGenerator data={jsonData} />
    </div>
  );
};

export default MyComponent;
