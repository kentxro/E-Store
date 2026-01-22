import { Flex, Heading, Field, Input, Button } from "@chakra-ui/react";

export default function Logs({page_name, submit_button, next_page, on_btnClick}) {
    return(
        <div>
            <Heading textAlign={'center'} fontSize={'3xl'} p={'2rem'}>
                {page_name}
            </Heading>
            <Flex height={'28rem'} justifyContent={'center'}>
                <Flex borderWidth={2} borderColor={'blue.500'} width={'30%'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Field.Root>
                        <Field.Label fontSize={'xl'} p={'1rem'}>
                            Name
                        </Field.Label>
                        <Input type="text" placeholder="enter your name" css={{'--focus-color' : 'lime'}} height={'2.5rem'} width={'21rem'} ml={'1rem'} fontSize={'large'}></Input>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label fontSize={'xl'} p={'1rem'}>
                            Password
                        </Field.Label>
                        <Input type="password" placeholder="enter your password" css={{'--focus-color' : 'lime'}} width={'21rem'} height={'2.5rem'} ml={'1rem'} fontSize={'large'}></Input>
                    </Field.Root>
                    <Button fontSize={'large'} m={'1rem'} width={'8rem'} height={'2.5rem'}>
                        {submit_button}
                    </Button>
                    <Button fontSize={'large'} width={'12rem'} height={'2.5rem'} onClick={on_btnClick}>
                        {next_page}
                    </Button>
                </Flex>
            </Flex>
        </div>
    );
};