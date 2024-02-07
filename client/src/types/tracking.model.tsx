interface TrackingEvent {
    courierCode: string;
    datetime: string;
    eventId: string;
    eventTrackingNumber: string;
    hasNoTime: boolean;
    location: string | null;
    occurrenceDatetime: string;
    order: any; // You might define a proper type for 'order' if available
    sourceCode: string;
    status: string;
    statusCategory: string | null;
    statusCode: string | null;
    statusMilestone: string;
    trackingNumber: string;
    utcOffset: string | null; // You might want to define a proper type for 'utcOffset'
}

interface Shipment {
    delivery: {
        estimatedDeliveryDate: string | null;
        service: string;
        signedBy: string | null;
    };
    destinationCountryCode: string;
    originCountryCode: string;
    recipient: {
        address: string | null; // You might define a proper type for 'address' if available
        city: string | null;
        name: string | null;
        postCode: string;
        subdivision: string | null;
    };
    shipmentId: string;
    statusCategory: string;
    statusCode: string | null;
    statusMilestone: string;
    trackingNumbers: { tn: string }[];
}

interface StatisticsTimestamps {
    availableForPickupDatetime: string | null;
    deliveredDatetime: string | null;
    exceptionDatetime: string | null;
    failedAttemptDatetime: string | null;
    inTransitDatetime: string;
    infoReceivedDatetime: string;
    outForDeliveryDatetime: string | null;
}

interface Statistics {
    timestamps: StatisticsTimestamps;
}

interface Tracker {
    createdAt: string;
    isSubscribed: boolean;
    shipmentReference: string | null;
    trackerId: string;
    trackingNumber: string;
}

interface TrackingsData {
    trackings: {
        events: TrackingEvent[];
        shipment: Shipment;
        statistics: Statistics;
        tracker: Tracker;
    }[];
}

export interface TrackingResponse {
    data: TrackingsData;
}