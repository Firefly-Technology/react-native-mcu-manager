import ExpoModulesCore

struct ImageSlotInfo: Record {
    @Field var id: UInt64?
    @Field var version: String?
    @Field var hash: [UInt8]?
    @Field var pending: Bool?
    @Field var confirmed: Bool?
}