import ExpoModulesCore

struct ShellCommandResponse: Record {
    @Field var output: String?
    @Field var returnCode: Int?
}

