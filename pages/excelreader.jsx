import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Grid,
  GridItem,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  Button,
  useTheme,
  useToast,
  Input,
} from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { CreateNewDocInFirebase } from "../lib/firebase";
import { ExcelToJson } from "../utils/ExcelToJson";

const useStyles = createUseStyles({
  root: {
    width: "90%",
    margin: "32px auto",
    padding: "0 16px",
    "@media screen and (max-width: 800px)": {
      padding: "0",
    },
    display: "flex",
    flexDirection: "column",
  },
  header: {
    marginBottom: "32px",
  },
  actionBox: {
    border: "1px solid lightgrey",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    maxWidth: "500px",
  },
  wordsContainer: {
    columns: "3 auto",
    border: "1px solid lightgrey",
    borderRadius: "8px",
    padding: "16px",
  },
});

const ExcelReader = () => {
  const theme = useTheme();
  const toast = useToast();
  const classes = useStyles(theme);
  const [file, setFile] = useState();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filePathset = (e) => {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    if (file) {
      setTimeout(() => {
        ExcelToJson(file, setResults, 0);
      }, 500);
    }
  }, [file]);

  const uploadFile = async () => {
    if (results.length) {
      setIsLoading(true);
      await results.forEach((result) => {
        CreateNewDocInFirebase(result, "words");
      });

      toast({
        title: "Uploaded successfully",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className={classes.root}>
      <Grid templateColumns="1fr 2fr" gap={4}>
        <GridItem>
          <Box className={classes.header}>
            <Text fontSize="large" fontWeight="bold">
              Upload Excel file into Database
            </Text>
          </Box>
          <div className={classes.actionBox}>
            <Text fontSize="xs">Select file to upload</Text>
            <Input
              type="file"
              id="file"
              onChange={filePathset}
              padding="8px"
              margin="0"
              height="auto"
              fontSize="xs"
            />
          </div>
          {results.length > 0 && (
            <div className={classes.actionBox}>
              <Text fontSize="sm">File Summary</Text>
              <Table variant="simple" margin="16px 0">
                <Tbody>
                  <Tr>
                    <Td paddingY="8px">
                      <Text fontSize="xs" marginRight="32px">
                        File name
                      </Text>
                    </Td>
                    <Td paddingY="8px">
                      <Text fontSize="xs">{file ? file.name : ""}</Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td paddingY="8px">
                      <Text fontSize="xs" marginRight="32px">
                        Number of line items
                      </Text>
                    </Td>
                    <Td paddingY="8px">
                      <Text fontSize="xs">{results.length || ""}</Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>

              <Button
                size="xs"
                onClick={uploadFile}
                isLoading={isLoading}
                disabled={false}
              >
                Upload into Cloud
              </Button>
            </div>
          )}
        </GridItem>
        <GridItem>
          {results.length ? (
            <div className={classes.wordsContainer}>
              {results.map((word, index) => (
                <Box display="flex" key={index}>
                  <Text fontSize="xs" marginRight="16px">
                    {word.hiragana}
                  </Text>
                  <Text fontSize="xs">{word.englishTranslate}</Text>
                </Box>
              ))}
            </div>
          ) : null}
        </GridItem>
      </Grid>
    </div>
  );
};

export default ExcelReader;
