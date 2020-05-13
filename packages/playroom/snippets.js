export default [
  {
    group: 'Button',
    name: 'Primary',
    code: `
      <Button variant="primary">
        Primary Button
      </Button>
    `
  },
  {
    group: 'Item Types',
    name: 'Single Select',
    code: `
        <SingleSelect>
          <SingleSelectChoice value="a">Option A</SingleSelectChoice>
          <SingleSelectChoice value="b">Option B</SingleSelectChoice>
          <SingleSelectChoice value="c">Option C</SingleSelectChoice>
        </SingleSelect>
    `
  },
  {
    group: 'Item Types',
    name: 'Text Input',
    code: `
          <Box width="500px">
            <TextInput/>
          </Box>
          `
  },
  {
    group: 'Layouts',
    name: '2 Column',
    code: `
        <Flex height="100%">
          <Box flexGrow="1" p="3" border="1">Column 1</Box>
          <Box flexGrow="1" p="3" border="1">Column 2</Box>
        </Flex>
    `
  }
];
